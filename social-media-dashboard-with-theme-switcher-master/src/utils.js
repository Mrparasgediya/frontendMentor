import data from "./data";

export const getDataByNames = (names) =>
  names
    .map((key, idx) => {
      const {
        today: { views, likes },
        Icon,
        name,
      } = data[key];
      let dataToSend = [
        { ...views, Icon, name },
        { ...likes, Icon, name },
      ];
      if ((idx + 1) % 2 === 0) {
        dataToSend = [
          { ...likes, Icon, name },
          { ...views, Icon, name },
        ];
      }
      return dataToSend;
    })
    .reduce((data, curr) => data.concat(curr), []);
