workspace(
   name = "express-postgres-ts-starter",
    managed_directories = {
        "@npm": ["node_modules"],
    },
)


load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("//:yarn.bzl", "YARN_LABEL")

http_archive(
    name = "build_bazel_rules_nodejs",
    # patches = [
    #     "//tools/esm-interop:patches/bazel/nodejs_binary_esm_support.patch",
    # ],
    sha256 = "0514c6530feb7abf94c9e3aeb4e33c89a21e2e9c9d9ed44cc217393bbf05ca9c",
    urls = [
			"https://github.com/bazelbuild/rules_nodejs/releases/download/v6.3.1/rules_nodejs-v6.3.1.tar.gz",
			"https://mirror.ghproxy.com/https://github.com/bazelbuild/rules_nodejs/releases/download/v6.3.1/rules_nodejs-v6.3.1.tar.gz"
		],
)

load("@build_bazel_rules_nodejs//:repositories.bzl", "build_bazel_rules_nodejs_dependencies")

build_bazel_rules_nodejs_dependencies()

http_archive(
    name = "rules_pkg",
    sha256 = "/Users/gming001/Workspace/MedicareAdvantage/ma-api/deplyoments",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_pkg/releases/download/0.6.0/rules_pkg-0.6.0.tar.gz",
        "https://github.com/bazelbuild/rules_pkg/releases/download/0.6.0/rules_pkg-0.6.0.tar.gz",
				"https://mirror.ghproxy.com/https://github.com/bazelbuild/rules_pkg/releases/download/0.6.0/rules_pkg-0.6.0.tar.gz",
    ],
)

# Fetch Aspect lib for utilities like write_source_files
# NOTE: We cannot move past version 1.23.2 of aspect_bazel_lib because it requires us to move to bazel 6.0.0 which
#       breaks our usage of managed_directories
http_archive(
    name = "aspect_bazel_lib",
    sha256 = "44f4f6d1ea1fc5a79ed6ca83f875038fee0a0c47db4f9c9beed097e56f8fad03",
    strip_prefix = "bazel-lib-1.34.0",
    urls = [
			"https://github.com/aspect-build/bazel-lib/archive/refs/tags/v1.34.0.tar.gz",
			"https://ghproxy.com/https://github.com/aspect-build/bazel-lib/archive/refs/tags/v1.34.0.tar.gz",
		]
)


# Setup the Node.js toolchain.
load("@rules_nodejs//nodejs:repositories.bzl", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    node_version = "20.10.0",
)

load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    name = "npm",
		data = [
        YARN_LABEL,
        "//:.yarnrc",
				"//:patches/trim-newlines+5.0.0.patch"
		],
		exports_directories_only = False,
		symlink_node_modules = True,
    package_json = "//:package.json",
		yarn = YARN_LABEL,
    yarn_lock = "//:yarn.lock",
)
