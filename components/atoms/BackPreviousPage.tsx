import { FC, useEffect, useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { facebookGrayIcon, linkSimpleIcon } from '../../public/icons';
import BackButton from './buttons/BackButton';
import { FacebookShareButton } from "react-share";

type PropsType = {
  title: string;
  onClick: () => Promise<boolean>;
};

const BackPreviousPage: FC<PropsType> = (props) => {
  const { title, onClick } = props;
  const trans = useTrans();
  const [copied, setCopied] = useState<boolean>(false);
  const [url, setUrl] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    setUrl(window.location.href);
  });

  const copy = () => {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="d-flex">
      <div className="d-flex flex-fill gap-2 align-self-center" role="presentation" >
        <BackButton onClick={onClick} content={title} />
      </div>
      <div className="d-flex p-3 flex-row gap-2 justify-content-end gap-3">
        <div>{trans.share}: </div>
        <FacebookShareButton
          url={url}
          quote={""}
          hashtag={"#ISEECOVID"}
          className="Demo__some-network__share-button"
        >
          <div>{facebookGrayIcon}</div>
        </FacebookShareButton>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className="cursor-pointer" onClick={copy} role="presentation">{!copied ? linkSimpleIcon : (<img src="/assets/successCopy.svg" width="24" height="24" alt="main-logo" />)}</div>
      </div>
    </div>
  );
};

export default BackPreviousPage;
