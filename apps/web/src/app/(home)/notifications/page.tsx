import HeaderBar from "@/components/layouts/HeaderBar";
import Image from "next/image";
import { FiHeart, FiMessageCircle, FiUserPlus, FiAtSign } from "react-icons/fi";

const NotificationPage = () => {
  const notifications = [
    {
      id: 1,
      name: "Seno Pratama",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      message: "liked your post.",
      time: "2m",
      type: "like",
    },
    {
      id: 2,
      name: "Rizky Ramadhan",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
      message: "commented on your post.",
      time: "15m",
      type: "comment",
    },
    {
      id: 3,
      name: "Nadia Putri",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
      message: "started following you.",
      time: "1h",
      type: "follow",
    },
    {
      id: 4,
      name: "Dimas Saputra",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      message: "mentioned you in a comment.",
      time: "3h",
      type: "mention",
    },
    {
      id: 5,
      name: "Andika Putra",
      avatar:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100",
      message: "liked your publication.",
      time: "1d",
      type: "like",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "like":
        return <FiHeart size={12} />;
      case "comment":
        return <FiMessageCircle size={12} />;
      case "follow":
        return <FiUserPlus size={12} />;
      case "mention":
        return <FiAtSign size={12} />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen border-x border-zinc-200/50">
      <HeaderBar title="Notifications" />
      <section className="divide-y divide-zinc-200/50">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex gap-3 px-4 py-4">
            <div className="relative h-10 w-10 shrink-0">
              <Image
                src={notification.avatar}
                alt={notification.name}
                fill
                sizes="40px"
                className="rounded-full object-cover"
              />

              <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-zinc-950 bg-zinc-800 text-zinc-300">
                {getIcon(notification.type)}
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="text-xs font-semibold text-zinc-200">
                  {notification.name}
                </p>
                <span className="text-[10px] text-zinc-600">
                  {notification.time}
                </span>
              </div>

              <p className="mt-1 text-xs text-zinc-400">
                {notification.message}
              </p>
            </div>

            <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
          </div>
        ))}
      </section>
    </main>
  );
};

export default NotificationPage;
