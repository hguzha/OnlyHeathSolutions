import { CheckCircle2, Activity, Heart, Users } from "lucide-react";

const iconMap = {
  Activity,
  Heart,
  Users,
};

export default function ServiceCard({ icon: iconName, title, bullets }) {
  const Icon = iconMap[iconName];
  
  return (
    <div className="card">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            background: "linear-gradient(135deg,#1fa6a0,#6a3fb5)",
            width: 44,
            height: 44,
            borderRadius: 14,
            display: "grid",
            placeItems: "center",
            color: "white"
          }}
        >
          {Icon && <Icon size={20} />}
        </div>

        <h3 style={{ margin: 0 }}>{title}</h3>
      </div>

      <ul style={{ marginTop: 18, paddingLeft: 0, listStyle: "none" }}>
        {bullets?.map((b) => (
          <li
            key={b}
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 10,
              color: "#64748b"
            }}
          >
            <CheckCircle2 size={16} />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
