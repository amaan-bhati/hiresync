import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/n28mGKkLB00?si=fidWd92vS0dDD9zv"
        thumbnailSrc="/yt-thumbnail.png"
        thumbnailAlt="Hero Video"
      />{/*https://youtu.be/n28mGKkLB00?si=m3qMFAZZcPpZ6JR_*/}
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/n28mGKkLB00?si=fidWd92vS0dDD9zv"
        thumbnailSrc="yt-thumbnail.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
