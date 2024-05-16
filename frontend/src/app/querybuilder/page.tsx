import Title from "@/components/ui/Title";
import QueryForm from "@/components/QueryForm";

function QueryBuilderPage() {
  return (
    <div>
      <Title>Query Builder</Title>
      <p>
        Data are provided by Centers for Disease Control, this dataset contains natality data based on CDC-collected
        statistics for live births occurring within the United States to U.S. residents. Contains data from over 600
        counties across all states!
      </p>
      <div className="grid place-items-center">
        <QueryForm />
      </div>

    </div>
  );
}

export default QueryBuilderPage;