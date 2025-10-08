import Output from "../Output";

export default function Outputs(props) {

    const { loanAmount, monthlyPI, totalPaid, totalInterest, handleCalculateNewMortgage } = props;
    return (
        <>
            <div className="outputs-page-hero">
                <p>This is the Outputs page. Here, you will see a detailed breakdown of your mortgage calculations, including monthly payments, total interest paid, and an amortization schedule to help you understand your loan better.</p>
            </div>

            <div className="output-group">
                <Output title="Loan Amount" name="loanAmount" value={loanAmount} />
            </div>
            <div className="output-group">
                <Output title="Monthly P&I" name="monthlyPI" value={monthlyPI} />
            </div>
            <div className="output-group">
                <Output title="Total Paid" name="totalPaid" value={totalPaid} />
            </div>
            <div className="output-group">
                <Output title="Total Interest" name="totalInterest" value={totalInterest} />
            </div>
            <button className="new-mortgage-btn" onClick={handleCalculateNewMortgage}>
                Calculate new mortgage <i className="fa-solid fa-arrow-right"></i>
            </button>
        </>
    );
}