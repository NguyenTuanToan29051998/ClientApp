import { REMOVE_EMPTY_ELEMENT_REX, REMOVE_IMG_TAG_REX } from "../public/const";

const useCustomQuill = () => {

  const previewContent = (content: string) => {
    return content.replaceAll(REMOVE_IMG_TAG_REX, '').replaceAll(REMOVE_EMPTY_ELEMENT_REX, '');
  };

  return {
    previewContent,
  };
};

export default useCustomQuill;
