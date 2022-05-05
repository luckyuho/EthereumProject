import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import CampaignF from "../ethereum/campaign";
import web3 from "../ethereum/web3";

class RequestRow extends Component {
  onApprove = async () => {
    const campaign = CampaignF(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.approveRequest(this.props.id).send({
      from: accounts[0],
    });
  };

  onFinalize = async () => {
    const campaign = CampaignF(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalizeRequest(this.props.id).send({
      from: accounts[0],
    });
  };

  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
    const readyToFinalize = request.approvalCount >= approversCount / 2;

    let finalizeBtn;
    if (request.complete) {
      finalizeBtn = <h4>Complete!!</h4>;
    } else if (readyToFinalize) {
      finalizeBtn = (
        <Button color="teal" basic onClick={this.onFinalize}>
          Finalize
        </Button>
      );
    } else {
      finalizeBtn = <Button disabled>Finalize</Button>;
    }

    return (
      <Row
        disabled={request.complete}
        positive={readyToFinalize && !request.complete}
      >
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{request.value}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {request.approvalCount}/{approversCount}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button color="green" onClick={this.onApprove}>
              Approve
            </Button>
          )}
        </Cell>
        <Cell>{finalizeBtn}</Cell>
      </Row>
    );
  }
}

export default RequestRow;
