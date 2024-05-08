import { useState, useEffect } from 'react';
import useContentDAO from '../../../hooks/useDAO';
import { ProposalView } from '../../../hooks/types'; // Make sure to import the ProposalView type

const ContentDAOInterface = () => {
  const {
    joinDAO,
    leaveDAO,
    createProposal,
    voteForProposal,
    voteAgainstProposal,
    executeProposal,
    getProposals,
  } = useContentDAO();
  const [stakeAmount, setStakeAmount] = useState('');
  const [proposalName, setProposalName] = useState('');
  const [proposalDescription, setProposalDescription] = useState('');
  const [proposalDuration, setProposalDuration] = useState('');
  const [proposals, setProposals] = useState<ProposalView[]>([]); // Initialize with an empty array of ProposalView

  useEffect(() => {
    const fetchProposals = async () => {
      const fetchedProposals = await getProposals();
      setProposals(fetchedProposals);
    };
    fetchProposals();
  }, [getProposals]);

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

  const handleVoteForProposal = async (proposalIndex: number) => {
    await voteForProposal(proposalIndex);
  };

  const handleVoteAgainstProposal = async (proposalIndex: number) => {
    await voteAgainstProposal(proposalIndex);
  };

  const handleExecuteProposal = async (proposalIndex: number) => {
    await executeProposal(proposalIndex);
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
        <h3>Proposals</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Total Votes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((proposal, index) => (
              <tr key={index}>
                <td>{proposal.name}</td>
                <td>{proposal.description}</td>
                <td>{proposal.status}</td>
                <td>{proposal.totalVotes.toString()}</td>
                <td>
                  <button onClick={() => handleVoteForProposal(index)}>Vote For</button>
                  <button onClick={() => handleVoteAgainstProposal(index)}>Vote Against</button>
                  <button onClick={() => handleExecuteProposal(index)}>Execute</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentDAOInterface;