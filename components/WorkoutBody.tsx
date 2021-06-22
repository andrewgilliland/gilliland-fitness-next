type Props = {
  content: string;
};

const WorkoutBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto my-12">
      <div
        // className={markdownStyles['markdown']}
        className="prose dark:prose-dark lg:prose-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default WorkoutBody;
