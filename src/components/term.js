import "./footer.css";
import React from "react";

const term = {
    width: "98%",
    height: "50vh",
    overflowX: "hidden",
    overflowY: "scroll",
    marginLeft: "auto",
    marginRight: "auto",
    scrollbarWidth: "thin",
    scrollbarColor: "transparent transparent #00000000",
    "::-webkit-scrollbar": {
        width: "5px",
    },
};

const Term = () => {
    return (
        <div className="terms">
            <div style={term} >
                <h3>Terms of Use</h3>
                <hr />
                <p>
                    TERMS AND CONDITIONS : By visiting our site “TruTrade.com"
                    you ("you" refers to the user or viewer of the Website) are
                    agreeing to be bound by the following terms and conditions
                    and the Privacy Policy on the Website.
                </p>
                <p>
                    REGISTRATION AND TERMINATION : By registering for this
                    facility you understand that TruTrade and its directors,
                    employees and associates reserve the right, in its sole
                    discretion, to deny you access to this Website or any
                    portion thereof without notice for various reasons.
                </p>
                <p>
                    LICENSE : TruTrade grants to you a non-exclusive
                    royalty-free revocable license to view, copy, and store this
                    website and the material on this website for personal
                    non-commercial use.
                </p>
                <p>
                    ENFORCEMENT OF COPYRIGHT : TruTrade takes the protection of
                    its copyright materials very seriously. If TruTrade
                    discovers that you have used our copyright materials in
                    contravention of the license above, TruTrade may bring
                    legal proceedings against you for an injunction to stop you
                    using those materials and monetary damages.
                </p>
                <p>
                    SECURITY : Unauthorized use of this Website and systems,
                    including, but not limited to, unauthorized entry into
                    TruTrade’s systems, online accounts, misuse of passwords is
                    strictly prohibited.
                </p>
                <p>
                    STRATEGY INTELLECTUAL PROPERTY : The intellectual property
                    of the strategy logic and configuration will solely and
                    exclusively belong to the strategy creator.
                </p>
                <p>
                    CAVEAT EMPTOR : Indian laws require Portfolio managers and
                    Investment Advisory Service providers to be registered under
                    SEBI. US Laws do not have any such requirement.
                </p>
                <p>
                    SERVICE DELAYS : TruTrade reserves its right to change,
                    improve or correct the information, materials and
                    descriptions on this website and to suspend and/or deny
                    access to this web site for scheduled or unscheduled
                    maintenance.
                </p>
                <p>
                    LIABILITY : You agree that TruTrade shall not be liable for
                    any direct, special, indirect, consequential or incidental
                    damages arising out of the use or inability to use
                    www.TruTrade.com.
                </p>
                <p>
                    INDEMNIFICATION : You shall indemnify, defend and hold
                    harmless TruTrade from any and all claims and losses
                    imposed on, incurred by or asserted as a result of or
                    related to your access and use of www.TruTrade.com.
                </p>
                <p>
                    ENTIRE AGREEMENT : This User Agreement constitutes the
                    entire agreement between the parties.
                </p>
                <p>
                    DISCLAIMER : The information made available is for
                    educational purposes only. TruTrade does not recommend or
                    advocate the buying, selling, or holding of any investment.
                    If you have any questions or concerns about these Terms,
                    please contact us at <span>supports@trutrade.com.</span>
                </p>
            </div>
        </div>
    );
};

export default Term;
