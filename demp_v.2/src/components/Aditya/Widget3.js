import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import piggy_bank from "../../resources/images/icons/piggy_bank.png";
import axios from "axios";
class Widget3 extends Component {
  constructor() {
    super();
    this.state = {
      tools: "",
      toolsTotal: "",
      fertilizerTotal: "",
      other: "",
      otherTotal: "",
      seeds: "",
      seedsTotal: "",
      totalIncome: "",
      totalExpense: "",
      revenue: "",
    };
  }
  componentDidMount() {
    this.getIncomeExpense();
  }
  getIncomeExpense = () => {
    axios
      .get(`${window.base_url}/${window.getIncomeAndExpense}`)
      .then((res) => {
        const data = res.data;
        let toolsTotal = data.expenseCategory[0].total;
        let fertilizerTotal = data.expenseCategory[1].total;
        let otherTotal = data.expenseCategory[2].total;
        let seedsTotal = data.expenseCategory[3].total;
        let total = toolsTotal + fertilizerTotal + otherTotal + seedsTotal;
        toolsTotal = Math.round((toolsTotal / total) * 100);
        fertilizerTotal = Math.round((fertilizerTotal / total) * 100);
        otherTotal = Math.round((otherTotal / total) * 100);
        seedsTotal = Math.round((seedsTotal / total) * 100);

        this.setState({ tools: data.expenseCategory[0]._id });
        this.setState({ toolsTotal: toolsTotal });
        this.setState({ fertilizerTotal: fertilizerTotal });
        this.setState({ otherTotal: otherTotal });
        this.setState({ seedsTotal: seedsTotal });

        this.setState({ totalIncome: data.total.totalIncome });
        this.setState({ totalExpense: data.total.totalExpense });
        this.setState({ revenue: data.total.revenue });
      });
  };
  render() {
    const {
      tools,
      toolsTotal,
      fertilizerTotal,
      other,
      otherTotal,
      seeds,
      seedsTotal,
      totalIncome,
      totalExpense,
      revenue,
    } = this.state;

    // console.log(ieDetails.expenseCategory[0], "ieDetails");
    //console.log(ieDetails.total.totalIncome);
    //console.log("ieDetails", ieDetails.expenseCategory[0]._id);
    const bar1 = 45;
    return (
      <div className="col-md-4  mt-25">
        <div className="cardContainer">
          <div className="row m-0">
            <h2 className="stitle  fc-green mb-0">Income and Expenses</h2>
            <button
              type="button"
              className="btn white p-0 get pink-purple br-26 ml-25"
            >
              <span className="mt-0">2020</span>
            </button>
            <a className="ml-auto fc-green">
              <u>EDIT</u>
            </a>
          </div>
          <div className="row mt-30">
            <div className="col-md-6 text-center">
              <img src={piggy_bank} className="piggy-icon" alt="piggy bank" />
            </div>
            <div className="col-md-6 text-right ">
              <div className="mr-18">
                <p className="fc-blue-1 mb-0">Balance</p>
                <h2 className="fc-blue-1"> {Math.round(revenue)} Bath</h2>
              </div>
            </div>
          </div>
          <div className="row text-center p-15">
            <div className="col-md-6 ">
              <div className="bg-blue mr-10 white">
                <br />
                <p className="mb-0">Revenue</p>
                <h3>{Math.round(totalIncome)} Bath</h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-pink mr-10  white">
                {" "}
                <br />
                <p className="mb-0">Expendature</p>
                <h3>{Math.round(totalExpense)} Bath</h3>
              </div>
            </div>
          </div>
          <div>
            <p className="fs-18 fc-blue-1">Expense Catogary</p>
            <div className="row">
              <div className="col-md-6">
                <p className="fs-14 fc-lblue mb-0 Expense1">fertilizer</p>
                <p className="fs-14 fc-blue-1 mb-0 ">
                  {Math.round(fertilizerTotal)}%
                </p>
              </div>
              <div className="col-md-6">
                <p className="fs-14 fc-lblue mb-0 Expense2">Seeds</p>
                <p className="fs-14 fc-blue-1 mb-0 ">
                  {Math.round(seedsTotal)}%
                </p>
              </div>
            </div>

            <ProgressBar className="pb-c">
              <ProgressBar
                className="bar-1"
                now={Math.round(fertilizerTotal)}
                key={1}
              />
              <ProgressBar
                className="bar-2"
                now={Math.round(seedsTotal)}
                key={2}
              />
              <ProgressBar
                className="bar-3"
                now={Math.round(toolsTotal)}
                label={`${Math.round(toolsTotal)}%`}
                key={3}
              />
              <ProgressBar
                className="bar-4"
                now={Math.round(otherTotal)}
                label={Math.round(otherTotal)}
                key={4}
              />
            </ProgressBar>
            <div className="row">
              <div className="col-md-6 text-right">
                <p className="fs-14  fc-lblue mb-0 Expense3">Tools</p>
              </div>
              {/*  <div className="col-md-1 text-right">|</div> */}
              <div className="col-md-5 text-left">
                <p className="fs-14 fc-lblue  mb-0 Expense4">Others</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-right">
                <p className="fs-14 fc-blue-1 mb-0">
                  {Math.round(toolsTotal)}%
                </p>
              </div>
              {/*  <div className="col-md-1 text-right">|</div> */}
              <div className="col-md-5 text-left">
                <p className="fs-14 fc-blue-1 mb-0 ">
                  {Math.round(otherTotal)}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Widget3;
