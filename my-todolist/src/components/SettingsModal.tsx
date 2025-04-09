/* components/SettingsModal.tsx */
/* 아직 반영 안됨, 작성만된 상태 */
type Props = {
    show: boolean;
    onClose: () => void;
  };
  
  export function SettingsModal({ show, onClose }: Props) {
    if (!show) return null;
  
    return (
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-10">
        <div className="bg-white rounded-2xl p-6 shadow-xl w-80">
          <h2 className="text-xl font-bold mb-4">⚙️ 설정</h2>
          <p className="text-gray-600">추가 기능이 여기에 들어올 수 있어요!</p>
          <button
            onClick={onClose}
            className="mt-6 w-full bg-[#f5bcb6] text-white py-2 rounded-xl hover:scale-105 transition"
          >닫기</button>
        </div>
      </div>
    );
  }
  