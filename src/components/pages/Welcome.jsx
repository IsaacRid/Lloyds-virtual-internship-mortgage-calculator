export default function Welcome() {
    return (
        <>
            <div className="welcome-page-hero">
                <p>Welcome to the Lloyds Bank Mortgage Calculator. This easy-to-use tool helps you quickly estimate your monthly payments, explore different loan options, and understand what works best for your budget.</p>
            </div>

            <div className="terminology-table">
                <p>Here is a table of common mortgage terms and their definitions, it is reccomended you familiarise youirself with these terms before you proceed:</p>
                <table>
                    <tr>
                        <th>Term</th>
                        <th>Definition</th>
                    </tr>
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
                </table>
            </div>

            <div className="welcome-page-input">
                <p>To get started, enter your name below and click the button to get started!</p>
                <input type="text" placeholder="Enter your name"></input>
                <button onClick={handleWelcomeSubmit()}>Get Started</button>
            </div>
        </>
    );
}
