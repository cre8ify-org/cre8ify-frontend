import { useState } from "react";
import Content from "./Content";
import useGetContent from "../../../../hooks/useGetContent";
import { Grid } from "@chakra-ui/react";

interface ContentItem {
  title: string;
  id: number;
  dateCreated: number;
  creatorProfile: string;
  ipfsHash: string;
  creator: string;
  isDeleted: boolean;
  isMonetized: boolean;
  views: number;
  likes: number;
  dislikes: number;
  shares: number;
  rating: number;
  contentType: string;
}

const ContentMap = () => {
  const { data: contentItems = [], loading, error } = useGetContent();
  const [fullContent, setFullContent] = useState(contentItems);
  const [id, setId] = useState<ContentItem | undefined>(
    (fullContent as ContentItem[])[0]
  );

  console.log(contentItems);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleFullContent = (e: any) => {
    setId(e);

    setFullContent((prev) => prev);
  };

  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={6}>
      {(contentItems as ContentItem[]).map((item, index) => (
        <Content
          handleFullContent={handleFullContent}
          id={id}
          key={index}
          item={item}
        />
      ))}
    </Grid>
  );
};

export default ContentMap;
