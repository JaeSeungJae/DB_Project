import { useState } from "react";
import Reac from "react";
import { Header, PageContainer } from "../Market/MarketStyle";

const initialChattingLog = {
    chat_id: 1,
    message: [
        {
            content: '1번 메시지',
            sender: '1',
            date: '2024-11-11T00:01:23',
        },
        {
            content: '2번 메시지',
            sender: '2',
            date: '2024-11-11T00:01:24',
        },
        {
            content: '3번 메시지',
            sender: '1',
            date: '2024-11-11T00:01:25',
        },
        {
            content: '4번 메시지',
            sender: '2',
            date: '2024-11-11T00:01:26',
        },
    ],
};

const Chatting = () => {
    const userId = '1'; // 현재 사용자 ID를 '1'로 가정
    const [chattingLog, setChattingLog] = useState(initialChattingLog); // 채팅 로그 상태
    const [sendMessage, setSendMessage] = useState('');
    const handleSendMessage = () => {
        if (sendMessage.trim() === "") return; // 빈 메시지 방지

        const newChat = {
            content: sendMessage,
            sender: userId,
            date: new Date().toISOString(), // 현재 시간을 ISO 포맷으로 추가
        };

        setChattingLog((prev) => ({
            ...prev,
            message: [...prev.message, newChat], // 새로운 메시지를 기존 메시지 뒤에 추가
        }));
        setSendMessage(""); // 입력 필드 초기화
    };
    return (
        <PageContainer style={{ padding: "20px" }}>
            <Header>
                <h2>채팅</h2>
            </Header>
            <div style={{width: '50%', height: '100%'}}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginTop: "20px",
                    maxWidth: "800px",
                    
                }}
            >
                {chattingLog.message.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: msg.sender === userId ? "flex-end" : "flex-start",
                        }}
                    >
                        <div
                            style={{
                                maxWidth: "70%",
                                padding: "10px",
                                borderRadius: "10px",
                                backgroundColor: msg.sender === userId ? "#d1f7c4" : "#ffffff",
                                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                                textAlign: "left",
                            }}
                        >
                            <p style={{ margin: 0 }}>{msg.content}</p>
                            <span
                                style={{
                                    fontSize: "12px",
                                    color: "#888",
                                    display: "block",
                                    marginTop: "5px",
                                    textAlign: "right",
                                }}
                            >
                                {new Date(msg.date).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                    position: "fixed",
                    bottom: "20px",
                    width: "100%",
                }}
            >
                <input
                    type="text"
                    placeholder="메시지를 입력하세요"
                    style={{
                        flex: 1,
                        maxWidth: "500px",
                        padding: "10px",
                        borderRadius: "20px",
                        border: "1px solid #ccc",
                        outline: "none",
                        marginRight: "10px",
                    }}
                />
                <button
                    style={{
                        padding: "10px 20px",
                        borderRadius: "20px",
                        backgroundColor: "#4caf50",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    +
                </button>
            </div>
            <input
                    type="text"
                    placeholder="메시지를 입력하세요"
                    value={sendMessage}
                    onChange={(e) => setSendMessage(e.target.value)} // 입력값 업데이트
                    style={{
                        flex: 1,
                        width: '90%',
                        padding: "10px",
                        borderRadius: "20px",
                        border: "1px solid #ccc",
                        outline: "none",
                        marginRight: "10px",
                        marginTop: '50px',
                    }}
                />
                <button
                    onClick={handleSendMessage} // 메시지 추가 이벤트
                    style={{
                        padding: "10px 20px",
                        borderRadius: "20px",
                        backgroundColor: "#4caf50",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        marginBottom: '200px',
                        marginTop: '10px',
                    }}
                >
                    전송
                </button>
            </div>
        </PageContainer>
    );
};

export default Chatting;
