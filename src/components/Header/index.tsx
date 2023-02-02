import Image from 'next/image'

interface HeaderProps {
  title: string;
  subtitle: string;
  img: { src: string, alt: string };
}

export default function Header({ title, subtitle, img }: HeaderProps) {
  return (
    <main>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <Image
        src={img.src}
        alt={img.alt}
        width={500}
        height={500}
      />
    </main>
  )
}