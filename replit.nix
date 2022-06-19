{ pkgs }: {
    deps = [
        pkgs.bashInteractive
	      pkgs.neovim.out
        pkgs.sudo
	      pkgs.vim.out
	      pkgs.nodejs.out
    ];
}
