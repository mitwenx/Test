export function Footer() {
  return (
    <footer className="mt-20 border-t bg-muted/30 py-8">
      <div className="container text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} CycleIndia. Open-source frontend for discovering cycling events across India.</p>
      </div>
    </footer>
  );
}
