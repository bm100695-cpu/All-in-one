import React, { useEffect, useState } from 'react';
import { api } from '../api';

export const AdminExamHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await api.getAdminExamHistory(); // Isko apne api.js me define karein
        setHistory(res.history || []);
      } catch (err) {
        console.error('Failed to load history', err);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs">
      <h2 className="text-base font-semibold text-slate-900 mb-4">Student Exam History & Submissions</h2>
      
      {loading ? (
        <p className="text-xs text-slate-500">Loading history...</p>
      ) : history.length === 0 ? (
        <p className="text-xs text-slate-500">No exam attempts recorded yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                <th className="p-3 font-medium">Student Name</th>
                <th className="p-3 font-medium">Email</th>
                <th className="p-3 font-medium">Exam Name</th>
                <th className="p-3 font-medium">Score</th>
                <th className="p-3 font-medium">Date & Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {history.map((item) => (
                <tr key={item._id} className="hover:bg-slate-50/50">
                  <td className="p-3 font-semibold text-slate-900">{item.studentName}</td>
                  <td className="p-3 text-slate-600">{item.studentEmail}</td>
                  <td className="p-3 text-slate-800 font-medium">{item.examTitle}</td>
                  <td className="p-3 text-emerald-700 font-bold">{item.score} / {item.totalMarks}</td>
                  <td className="p-3 text-slate-500">{new Date(item.submittedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};