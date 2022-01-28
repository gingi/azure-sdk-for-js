/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to The operation to create or update the extension.
 *
 * @summary The operation to create or update the extension.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/stable/2021-05-20/examples/UpdateExtension.json
 */
import {
  MachineExtensionUpdate,
  HybridComputeManagementClient
} from "@azure/arm-hybridcompute";
import { DefaultAzureCredential } from "@azure/identity";

async function createOrUpdateAMachineExtension() {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "myResourceGroup";
  const machineName = "myMachine";
  const extensionName = "CustomScriptExtension";
  const extensionParameters: MachineExtensionUpdate = {
    properties: {
      type: "CustomScriptExtension",
      publisher: "Microsoft.Compute",
      settings: {
        commandToExecute:
          'powershell.exe -c "Get-Process | Where-Object { $_.CPU -lt 100 }"'
      },
      typeHandlerVersion: "1.10"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const result = await client.machineExtensions.beginUpdateAndWait(
    resourceGroupName,
    machineName,
    extensionName,
    extensionParameters
  );
  console.log(result);
}

createOrUpdateAMachineExtension().catch(console.error);