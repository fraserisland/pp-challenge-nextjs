import Header from "../src/components/Header"

interface Page {
  id: number,
  attributes: {
    Heading: string;
    Subtitle: string;
    Image: {
      data: {
        attributes: {
          url: string;
          alt: string;
        };
      };
    };
  };
}

interface PageProps {
  page: Page
}

export default function Page({ page }: PageProps) {
  const { Heading, Subtitle, Image: image } = page.attributes
  const imageSrc = `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.data.attributes.url}`
  console.log(imageSrc)
  return (
    <div>
      <Header title={Heading} subtitle={Subtitle} img={{ src: `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.data.attributes.url}`, alt: image.data.attributes?.alt ?? "" }} />
    </div>
  )
}

export async function getStaticProps({ params }: { params: Page }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages/${params.id}?populate=*`, {
    method: 'GET',
    headers: {
      Authorization: process.env.STRAPI_TOKEN || ""
    }
  })

  const page = await res.json()

  return {
    props: {
      page: page.data,
    },
  }
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages`, {
    method: 'GET',
    headers: {
      Authorization: process.env.STRAPI_TOKEN || ""
    }
  })

  const pages = await res.json()

  const paths = pages.data?.map((page: Page) => {
    return {
      params: { id: `${page.id}` },
    }
  })

  return { paths, fallback: false }
}
