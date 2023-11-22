type Callback = <T>(item: T) => void;

export const forEach = <T>(items: T[], callback: Callback) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
};
