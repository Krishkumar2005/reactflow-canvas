export const fetchApps = async () => {
  await new Promise((r) => setTimeout(r, 500));
  return [
    { id: '1', name: 'supertokens-golang' , image: 'https://res.cloudinary.com/doauyp2eg/image/upload/v1766134944/st_small_507x507-pad_600x600_f8f8f8_w5jhgn.jpg' },
    { id: '2', name: 'supertokens-java' , image: 'https://res.cloudinary.com/doauyp2eg/image/upload/v1766135015/java-logo-png_seeklogo-158094_caj8ix.png'},
  ];
};
