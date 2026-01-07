import messages_en from '../lang/en-US.json';

const messages: { [key: string]: any } = {
  en: messages_en,
};

const [lang] = navigator.language.split(/[-_]/);

export default {
  lang,
  messages,
};
