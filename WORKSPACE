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
    sha256 = "5dd1e5dea1322174c57d3ca7b899da381d516220793d0adef3ba03b9d23baa8e",
    urls = [
			"https://github.com/bazelbuild/rules_nodejs/releases/download/5.8.3/rules_nodejs-5.8.3.tar.gz",
			"https://ghproxy.com/https://github.com/bazelbuild/rules_nodejs/releases/download/5.8.3/rules_nodejs-5.8.3.tar.gz"
		],
)

load("@build_bazel_rules_nodejs//:repositories.bzl", "build_bazel_rules_nodejs_dependencies")

build_bazel_rules_nodejs_dependencies()

http_archive(
    name = "rules_pkg",
    sha256 = "62eeb544ff1ef41d786e329e1536c1d541bb9bcad27ae984d57f18f314018e66",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_pkg/releases/download/0.6.0/rules_pkg-0.6.0.tar.gz",
        "https://github.com/bazelbuild/rules_pkg/releases/download/0.6.0/rules_pkg-0.6.0.tar.gz",
				"https://ghproxy.com/https://github.com/bazelbuild/rules_pkg/releases/download/0.6.0/rules_pkg-0.6.0.tar.gz",
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
    node_version = "18.10.0",
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