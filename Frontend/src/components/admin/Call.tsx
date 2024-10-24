import { useRef } from 'react';

const AdminChat: React.FC = () => {
  const [peerConnection, setPeerConnection] = useState<RTCPeerConnection | null>(null);
  const userVideoRef = useRef<HTMLVideoElement>(null);
  const adminVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!socket) return;

    const pc = new RTCPeerConnection();

    // Handle incoming ICE candidates
    socket.on('ice-candidate', (data) => {
      pc.addIceCandidate(new RTCIceCandidate(data.candidate));
    });

    // Handle WebRTC offer from user
    socket.on('offer', async (data) => {
      await pc.setRemoteDescription(new RTCSessionDescription(data.offer));

      // Get admin media (video/audio)
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (adminVideoRef.current) {
        adminVideoRef.current.srcObject = stream;
      }

      // Add tracks to peer connection
      stream.getTracks().forEach((track) => pc.addTrack(track, stream));

      // Create WebRTC answer and send it back to user
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      socket.emit('answer', { answer, targetUserId: data.from });
    });

    // Setup ICE candidate event
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('ice-candidate', { candidate: event.candidate, targetUserId: userId });
      }
    };

    // Handle receiving track (user's video/audio stream)
    pc.ontrack = (event) => {
      if (userVideoRef.current) {
        userVideoRef.current.srcObject = event.streams[0];
      }
    };

    setPeerConnection(pc);
  }, [socket]);

  return (
    <div>
      <video ref={userVideoRef} autoPlay playsInline></video>
      <video ref={adminVideoRef} autoPlay playsInline></video>
    </div>
  );
};
