
export default function Welcome(props) {

    const { name, setName, handleWelcomeSubmit } = props;

    return (
        <>
            <div className="welcome-page-hero">
                <p>Welcome to the Lloyds Bank Mortgage Calculator. This easy-to-use tool helps you quickly estimate your monthly payments, explore different loan options, and understand what works best for your budget.</p>
            </div>

            <table className="welcome-page-table">
                <thead>
                    <tr>
                        <th>Term</th>
                        <th>Definition</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a</td>
                        <td>a</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>


            <div className="welcome-page-input">
                <p>To get started, enter your name below and click the button to get started!</p>
                <input value={name} onChange={(event) => {
                    console.log(event.target.value)
                    setName(event.target.value)
                }} type="text" placeholder="Enter your name..." />
                <button onClick={handleWelcomeSubmit}>Get Started</button>
            </div>
        </>
    );
}
