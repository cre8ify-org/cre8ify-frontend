import { useState } from 'react';
import useContentDAO from '../../../hooks/useDAO';

const ContentDAOInterface = () => {
  const {
    joinDAO,
    leaveDAO,
    createProposal,
    voteForProposal,
    voteAgainstProposal,
    executeProposal,
  } = useContentDAO();

  const [stakeAmount, setStakeAmount] = useState('');
  const [proposalName, setProposalName] = useState('');
  const [proposalDescription, setProposalDescription] = useState('');
  const [proposalDuration, setProposalDuration] = useState('');
  const [proposalId, setProposalId] = useState('');

  const handleJoinDAO = async () => {
    await joinDAO(parseFloat(stakeAmount));
    setStakeAmount('');
  };

  const handleLeaveDAO = async () => {
    await leaveDAO();
  };

  const handleCreateProposal = async () => {
    await createProposal(proposalName, proposalDescription, parseInt(proposalDuration));
    setProposalName('');
    setProposalDescription('');
    setProposalDuration('');
  };

  const handleVoteForProposal = async () => {
    await voteForProposal(parseInt(proposalId));
    setProposalId('');
  };

  const handleVoteAgainstProposal = async () => {
    await voteAgainstProposal(parseInt(proposalId));
    setProposalId('');
  };

  const handleExecuteProposal = async () => {
    await executeProposal(parseInt(proposalId));
    setProposalId('');
  };

  return (
    <div>
      <h2>Content DAO Interface</h2>

      <div>
        <h3>Join DAO</h3>
        <input
          type="number"
          placeholder="Stake Amount"
          value={stakeAmount}
          onChange={(e) => setStakeAmount(e.target.value)}
        />
        <button onClick={handleJoinDAO}>Join DAO</button>
      </div>

      <div>
        <h3>Leave DAO</h3>
        <button onClick={handleLeaveDAO}>Leave DAO</button>
      </div>

      <div>
        <h3>Create Proposal</h3>
        <input
          type="text"
          placeholder="Proposal Name"
          value={proposalName}
          onChange={(e) => setProposalName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Proposal Description"
          value={proposalDescription}
          onChange={(e) => setProposalDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Proposal Duration (seconds)"
          value={proposalDuration}
          onChange={(e) => setProposalDuration(e.target.value)}
        />
        <button onClick={handleCreateProposal}>Create Proposal</button>
      </div>

      <div>
        <h3>Vote for Proposal</h3>
        <input
          type="number"
          placeholder="Proposal ID"
          value={proposalId}
          onChange={(e) => setProposalId(e.target.value)}
        />
        <button onClick={handleVoteForProposal}>Vote For</button>
        <button onClick={handleVoteAgainstProposal}>Vote Against</button>
      </div>

      <div>
        <h3>Execute Proposal</h3>
        <input
          type="number"
          placeholder="Proposal ID"
          value={proposalId}
          onChange={(e) => setProposalId(e.target.value)}
        />
        <button onClick={handleExecuteProposal}>Execute Proposal</button>
      </div>
    </div>
  );
};

export default ContentDAOInterface;