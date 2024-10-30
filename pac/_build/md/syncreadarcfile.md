# syncReadArcFile

Loads resource **synchronously**. For loading resource, use [readArcFile](./readarcfile.md) instead.

Note that resource is loaded asynchrnously because reading them takes time, resulting bottleneck of the performance.

## Code Information

- **Name**: `syncReadArcFile`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 09 0a 00`
- **Assembly Address in Memory** : `0x8948f30`

## Parameters

- `(int)resource_type_id` *(8 bytes)* : See the resource type table below. If not sure, set it to *2* (`Loadinggroup_Scene`).
- `(String)resource_name` : Resource name to read.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08948f30(undefined4 param_1,undefined4 param_2)

{
  char *pcVar1;
  undefined4 *puVar2;
  char *pcVar3;
  undefined4 uVar4;
  int iVar5;
  char *pcVar6;
  char local_100 [256];
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  pcVar3 = &DAT_00000100;
  pcVar6 = local_100;
  pcVar1 = pcVar6;
  while (pcVar1 != (char *)0x0) {
    *pcVar6 = '\0';
    pcVar6 = pcVar6 + 1;
    pcVar3 = pcVar3 + -1;
    pcVar1 = pcVar3;
  }
  Pac_Get_StringParam(param_2,local_100);
  uVar4 = FUN_08883830(local_100);
  iVar5 = FUN_08843148(local_100,uVar4);
  if (iVar5 == 0) {
    uVar4 = FUN_0884a440(1);
    Data::Load_File_From_Bnd(uVar4,local_100,FUN_08882250,*puVar2,0,0,1,0,0,0);
    PAC::PAC_setCmdId(param_2,0);
  }
  else {
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

