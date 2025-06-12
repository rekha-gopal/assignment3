import ComplaintCountForm from "../components/ComplaintCountForm";

export default function ComplaintCountPage() {
  return (
    <div className="p-8">
      <h1 className="text-center text-2xl font-bold mb-6">
        📝 District-wise Complaint Report
      </h1>
      <ComplaintCountForm />
    </div>
  );
}
