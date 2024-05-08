// // types.ts
// export interface ProposalView {
//   name: string;
//   description: string;
//   status: ProposalStatus;
//   timeLeft: number;
//   voteCountYes: number;
//   voteCountNo: number;
//   totalVotes: number;
//   executed: boolean;
// }

// export enum ProposalStatus {
//   Ongoing,
//   Completed,
// }


export enum ProposalStatus {
  PENDING,
  EXECUTED,
  CANCELED,
}

export interface ProposalView {
  name: string;
  description: string;
  status: ProposalStatus;
  totalVotes: number;
  votesFor: number; // Add this new field
  votesAgainst: number; // Add this new field
  startTime: number;
  executed: boolean;
  // Add this new field (in seconds)
}