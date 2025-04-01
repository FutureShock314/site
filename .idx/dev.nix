{pkgs}: {
  channel = "stable-23.11";
  packages = with pkgs; [
    nodejs_20
    python313Full
  ];
  idx.extensions = [
    "dbaeumer.vscode-eslint"
    "Equinusocio.vsc-material-theme"
    "equinusocio.vsc-material-theme-icons"
    "haudraufhaun.hyper-is-theme"
    "KevinRose.vsc-python-indent"
    "ms-python.debugpy"
    "ms-python.python"
    "oderwat.indent-rainbow"
    "SirTori.indenticator"
    "usernamehw.errorlens"
    "zjffun.snippetsmanager"
    "vscodevim.vim"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}