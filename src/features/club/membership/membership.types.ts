export type Level = {
  id: number;
  title: string;
  icon: React.ReactNode;
  score: number;
};

export type MembershipProgressProps = {
  currentScore: number;
  nextLevelScore: number;
  levels: Level[];
};
