let _showSentiment;

export const subscribeSentiment = (showSentiment) => {
  _showSentiment = showSentiment;
};

export const showSentiment = (room) => {
  _showSentiment(room);
}