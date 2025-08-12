export default function HomePage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          🫒 غصن الزيتون
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          منصة تعليمية مقاومة للرقابة للتاريخ والثقافة الفلسطينية
        </p>
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            مرحباً بك في غصن الزيتون
          </h2>
          <p className="text-green-700">
            هذا اختبار أولي للتطبيق. سنقوم بإضافة المزيد من الميزات تدريجياً.
          </p>
        </div>
      </div>
    </div>
  );
}

