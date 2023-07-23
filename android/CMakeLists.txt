cmake_minimum_required(VERSION 3.4.1)

set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 11)

add_library(cpp
            SHARED
            ../cpp/react-native-rinerf3.cpp
            ../cpp/cjson.c
            ../cpp/custom.c
            ../cpp/dscp.c
            ../cpp/iperf_api.c
            ../cpp/iperf_auth.c
            ../cpp/iperf_client_api.c
            ../cpp/iperf_error.c
            ../cpp/iperf_locale.c
            ../cpp/iperf_sctp.c
            ../cpp/iperf_server_api.c
            ../cpp/iperf_tcp.c
            ../cpp/iperf_time.c
            ../cpp/iperf_udp.c
            ../cpp/iperf_util.c
            ../cpp/net.c
            ../cpp/tcp_info.c
            ../cpp/tcp_window_size.c
            ../cpp/timer.c
            ../cpp/units.c
            cpp-adapter.cpp
)

# Specifies a path to native header files.
include_directories(
            ../cpp
)
