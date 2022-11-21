import { BookType, DocumentType, VideoType } from '@/models/library';
import type { NextPage } from 'next';
import { Dispatch, SetStateAction, useState } from 'react';
import { libraryApiManagement } from '../../api-clients/library';
import useTrans from '../../hooks/useTrans';
import { columeIcon, downToLineBrownIcon, downToLineIcon, playVideoIcon } from '../../public/icons';
import styles from '../../styles/components/templates/LibraryBody.module.scss';
import Tabs from '../molecules/Tabs';
import SibModal from '../organisms/SibModal';

type ModalType = {
  show: boolean,
  mode: string,
}

type PropType = {
  bookList: BookType[];
  videoList: VideoType[];
  documentList: DocumentType[];
  numberSelected: number;
  setNumberSelected: Dispatch<SetStateAction<number>>;
};

const LibraryBody: NextPage<PropType> = (props) => {
  const { bookList, videoList, documentList, numberSelected, setNumberSelected } = props;
  const trans = useTrans();
  const [openVideo, setOpenVideo] = useState<boolean>(false);
  const [modalConfig, setModalConfig] = useState<ModalType>({
    show: false,
    mode: '',
  });
  const [pathFile, setPathFile] = useState<string>('');
  const [nameFile, setNameFile] = useState<string>('');
  const [idVideOpen, setIdVideoOpen] = useState<number>(0);

  const getYoutubeThumbnail = (url: string, quality: string) => {
    if (url) {
      let videoId, result;
      if (result = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)) {
        videoId = result.pop();
      }
      else if (result = url.match(/youtu.be\/(.{11})/)) {
        videoId = result.pop();
      }

      if (videoId) {
        if (typeof quality == "undefined") {
          quality = 'high';
        }
        let qualityKey = 'maxresdefault'; // Max quality
        if (quality == 'low') {
          qualityKey = 'sddefault';
        } else if (quality == 'medium') {
          qualityKey = 'mqdefault';
        } else if (quality == 'high') {
          qualityKey = 'hqdefault';
        }

        const thumbnail = "http://img.youtube.com/vi/" + videoId + "/" + qualityKey + ".jpg";
        return thumbnail;
      }
    }
    return false;
  };

  const handleOpenVideo = (idVideo: number) => {
    setOpenVideo(true);
    setIdVideoOpen(idVideo);
  };

  const handleDownloadFile = (docs: DocumentType) => {
    setNameFile(docs.name);
    if (docs.isFreeDownload) {
      window.open(docs.filePath, "_blank");
    }
    else {
      setModalConfig({ show: true, mode: 'confirm' });
      setPathFile(docs.filePath);
    }
    return;
  };

  const handleSpeech = async (title: string) => {
    libraryApiManagement.getAudioURL(title)
      .then((res) => {
        setTimeout(() => {
          handlePlayAudio(res.data.data.url);
        }, 100);
      })
      .catch((err) => console.log(err));
  };

  const handlePlayAudio = (url: string) => {
    const audio = new Audio();
    audio.src = url;
    audio.load();
    const promise = audio.play();
    if (promise !== undefined) {
      promise
        .then(() => {
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <Tabs tabNames={trans.tabLibraryList} numberSelected={numberSelected} setNumberSelected={setNumberSelected} />
      <div className={styles.book}>
        <div className={styles.categoryName} >{trans.book}</div>
        {!bookList.length ? (
          <div className="mt-3">{trans.noPost}</div>
        ) : (
          <div className="row">
            {(bookList || []).map(item => {
              return (
                <div key={Math.random()} className={`col-xxl-6 col-12 col-md-12 ${styles.itemWrapper}`}>
                  <div className={styles.item}>
                    <div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt={item.name} className={styles.image} />
                    </div>
                    <div className="d-grid">
                      <div className={styles.title}>{item.name}</div>
                      <div className={styles.author}>{item.authorName}</div>
                      <div className={styles.media}>
                        {/* <div className="d-flex gap-2 align-items-center">
                          <div className={styles.columeIcon} onClick={() => handleSpeech(item.name)} role="presentation">{columeIcon}</div>
                          <div className={styles.listen}>{trans.listen}</div>
                        </div> */}
                        <div className="d-flex gap-2 align-items-center">
                          <div className={styles.downloadIcon} onClick={() => handleDownloadFile(item)} role="presentation" aria-label="Tải xuông">{downToLineBrownIcon}</div>
                          <div className={styles.download} onClick={() => handleDownloadFile(item)} role="presentation" aria-label="Tải xuống">{trans.download}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className={styles.video}>
        <div className={styles.categoryName}>Video</div>
        {!videoList.length ? (
          <div className="mt-3">{trans.noVideo}</div>
        ) : (
          <>
            <div className="row">
              {(videoList || []).map(item => {
                return (
                  <div key={Math.random()} className={`col-xxl-6 col-12 col-md-12 ${styles.itemWrapper}`}>
                    <div className="position-relative" onClick={() => handleOpenVideo(item.id)} role="presentation">
                      <div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={styles.imageVideo} src={getYoutubeThumbnail(item.youtubeLink, 'max') || ''} alt={item.name} />
                      </div>
                      <div className={styles.playVideo}>{playVideoIcon}</div>
                    </div>
                    <div className={styles.titleVideo}>{item.name}</div>
                  </div>
                );
              })}
            </div>
            {openVideo && (
              <>
                <div className={styles.backgroundGray} />
                <div className={styles.dialogCustom}>
                  <div className={styles.close} role="presentation" onClick={() => setOpenVideo(false)}>{trans.close}</div>
                  {(videoList || []).map(item => (
                    <>
                      {item.id === idVideOpen && <iframe allowFullScreen key={item.id} title={item.name} className={styles.dialogVideo} src={item.youtubeLink} />}
                    </>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>

      <div className={styles.document}>
        <div className={styles.categoryName}>{trans.documents}</div>
        {!documentList.length ? (
          <div className="mt-3">{trans.noDocs}</div>
        ) : (
          <>
            {(documentList || []).map(item => {
              return (
                <div key={Math.random()} className="d-flex gap-4 py-2" role="button">
                  <div className="cursor-pointer d-flex gap-3" role="presentation" onClick={() => handleDownloadFile(item)}>
                    <div className="d-grid align-items-center">{downToLineIcon}</div>
                    <div className={styles.download}>{trans.download}</div>
                  </div>
                  <div>
                    <u role="presentation" onClick={() => handleDownloadFile(item)} className={styles.docName}>{item.name}</u>
                    {/* <a href={"https://storage.hungjp.tk/files/CV_DangThanhNam.docx"} target="_blank" rel="noopener noreferrer" className={styles.docName}>{item.name}</a> */}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className={styles.distanceFooter} />
      <SibModal
        title={modalConfig.mode === 'confirm' ? `${trans.sibModal.download.title}` : trans.requestSuccess}
        verifyRequest={trans.sibModal.download.verifyRequest}
        modalConfig={modalConfig}
        setModalConfig={setModalConfig}
        pathFile={pathFile}
        nameFile={nameFile}
      />
    </div>
  );
};

export default LibraryBody;
