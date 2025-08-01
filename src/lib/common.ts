const events = [
  "https://i.pinimg.com/736x/40/85/3e/40853ed84d06a00e8cdff97d54d19d6c.jpg",

  "https://i.pinimg.com/736x/41/d8/c5/41d8c5fe6252221ba0d63d60c029a4d4.jpg",

  "https://i.pinimg.com/736x/0f/54/76/0f5476613757a50da5068eeca596a9e9.jpg",

  "https://i.pinimg.com/736x/dd/cb/36/ddcb361a6f93e2518268638305e528ba.jpg",

  "https://i.pinimg.com/736x/de/ea/33/deea33b33262ef4788483f82bf1a4842.jpg",
];



export const getRandomImg = (type: string) => {
  const getRandomIndex = (length: number) => {
    const result = Math.floor(Math.random() * length);

    return result;
  };

  switch (type) {
    case "event":
      const index = getRandomIndex(events.length);

      return events[index];

    default:
      return null;
  }
}


export const scrollToBottom = (
  container: HTMLElement | null,
  smooth = false,
) => {
  if (container?.children.length) {
    const lastElement = container?.lastChild as HTMLElement

    lastElement?.scrollIntoView({
      behavior: smooth ? 'smooth' : 'auto',
      block: 'end',
      inline: 'nearest',
    })
  }
}

