// types.ts
export interface ProposalView {
  name: string;
  description: string;
  status: ProposalStatus;
  timeLeft: number;
  voteCountYes: number;
  voteCountNo: number;
  totalVotes: number;
  executed: boolean;
}

export enum ProposalStatus {
  Ongoing,
  Completed,
}
