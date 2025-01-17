import MessageList from "@/app/ui/dashboard/messages/messageList";


export default function Page(){

    function getMessages(){
        // Fetch messages from the server
        const messages = [
            {
                id: 1,
                title: "Hello",
                imgUrl: "/pp.jpg",
                content: "Hello, how are you?"
            },
            {
                id: 2,
                title: "Hi",
                imgUrl: "/pp.jpg",
                content: "Hi, I am fine, thank you."
            },
            {
                id: 3,
                title: "Hey",
                imgUrl: "/pp.jpg",
                content: "Hey, how are you?"
            }
        ];

        return messages;
    }

    return (
        <>
            <h1>Messages</h1>
            <div className="w-full flex flex-wrap gap-4">
                <MessageList messages={getMessages()}/>
            </div>
        </>
    );
}