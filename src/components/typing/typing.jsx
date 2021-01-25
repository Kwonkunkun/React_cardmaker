import React, { createRef, PureComponent } from "react";
import styles from "./typing.module.css";

class Typing extends PureComponent {
    state = {
        text: "",
        textArrayIdx: 0,
        charIdx: 0,
        isTyping: true,
    };

    cursorRef = createRef();
    timer = undefined;
    typingDelay = 200;
    erasingDelay = 100;
    nextTypingDelay = 1000;

    //시작시에 타이머를 킨다.
    componentDidMount() {
        this.timer = setTimeout(this.type, this.nextTypingDelay);
    }

    componentDidUpdate(prevProps) {
        if (this.props.textArray !== prevProps.textArray) {
            this.setState({ isTyping: false });
        } else {
            if (this.state.isTyping) {
                this.timer = setTimeout(this.type, this.typingDelay);
            } else {
                this.tiemr = setTimeout(this.erase, this.erasingDelay);
            }
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    type = () => {
        if (
            this.state.charIdx <
            this.props.textArray[this.state.textArrayIdx].length
        ) {
            if (!this.cursorRef.current.classList.contains(styles.typing)) {
                this.cursorRef.current.classList.add(styles.typing);
            }
            this.setState({
                text:
                    this.state.text +
                    this.props.textArray[this.state.textArrayIdx][
                        this.state.charIdx
                    ],
                charIdx: this.state.charIdx + 1,
            });
        } else {
            this.cursorRef.current.classList.remove(styles.typing);
            this.setState({
                textArrayIdx:
                    this.state.textArrayIdx + 1 >= this.props.textArray.length
                        ? 0
                        : this.state.textArrayIdx + 1,
                // charIdx: 0,
                isTyping:
                    this.state.textArrayIdx + 1 >= this.props.textArray.length
                        ? true
                        : true,
            });
        }
    };

    erase = () => {
        if (this.state.charIdx > 0) {
            if (!this.cursorRef.current.classList.contains(styles.typing)) {
                this.cursorRef.current.classList.add(styles.typing);
            }
            this.setState({
                text: this.state.text.substring(0, this.state.charIdx - 1),
                charIdx:
                    this.state.charIdx - 1 >= 0 ? this.state.charIdx - 1 : 0,
            });
        } else {
            this.cursorRef.current.classList.remove(styles.typing);

            if (this.state.textArrayIdx >= this.props.textArray.length - 1) {
                this.setState({
                    textArrayIdx: 0,
                    charIdx: 0,
                    isTyping: true,
                });
            } else {
                this.setState({
                    textArrayIdx: this.state.textArrayIdx + 1,
                    charIdx: 0,
                    isTyping: true,
                });
            }
        }
    };

    render() {
        return (
            <div className={styles.container}>
                <p>
                    Hi there~&nbsp;
                    <br />
                    <span className={styles.text}>{this.state.text}</span>
                    <span ref={this.cursorRef} className={styles.cursor}>
                        &nbsp;
                    </span>
                </p>
            </div>
        );
    }
}

export default Typing;
