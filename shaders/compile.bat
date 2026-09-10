@echo off
pushd "%~dp0"

C:\VulkanSDK\1.4.357.0\Bin\glslc shader.vert -o vert.spv
C:\VulkanSDK\1.4.357.0\Bin\glslc shader.frag -o frag.spv

popd