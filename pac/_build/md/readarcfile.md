# readArcFile

> [!WARNING]
> Call [requestActor](./requestactor.md) after this, after loading **equipment, character, gimmick or effect**.

Reads a resource file in a given file path. The path is relative to `DATA_CMN` or `DATAMS`, in DLC Mission, it can be relative to DLC Mission BND.

For an actor, this loads model only, so [requestActor](./requestactor.md) might be required.

Note that resource is loaded **asynchrnously** because reading them takes time, resulting bottleneck of the performance.

## Code Information

- **Name**: `readArcFile`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 09 09 00`
- **Assembly Address in Memory** : `0x8948d9c`

## Parameters

- `(int)resource_type_id` *(8 bytes)* : See the resource type table below. If not sure, set it to *2* (`Loadinggroup_Scene`).
- `(String)resource_name` : Resource name to read.

|ID|Resource type|
|---|---|
|0x0|LoadingGroup_System|
|0x1|LoadingGroup_SystemLocalize|
|0x2|LoadingGroup_Scene|
|0x3|LoadingGroup_World|
|0x4|LoadingGroup_SceneLocal|
|0x5|LoadingGroup_Sound|
|0x6|LoadingGroup_Work|
|0x7|LoadingGroup_Work2|
|0x8|LoadingGroup_Work3|
|0x9|LoadingGroup_Test|
|0xA|LoadingGroup_AzitoLocal|
|0xB|(null)|

However, the table above does not need to be strictly followed.

## Remarks

In current PAC instruction, 4 empty bytes follow after the `readArcFile`.

## Example

Here is one example in hex:

```25 09 09 00 / 02 00 00 00 / 0b 00 00 00 / 41 63 74 6f / 72 2f 43 68 / 61 72 61 2f / 63 68 72 30 / 32 5f 30 33 / 5f 30 30 32 / 2e 62 6e 64 / 00 00 00 00```

Which is interpreted as:

```c
readArcFile((int)11, "Actor/Chara/chr02_03_002.bnd")
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08948d9c(undefined4 param_1,undefined4 param_2)

{
  char *pcVar1;
  undefined4 uVar2;
  uint uVar3;
  int iVar4;
  int iVar5;
  undefined4 *puVar6;
  char *pcVar7;
  undefined4 uVar8;
  char *pcVar9;
  undefined4 uVar10;
  code *pcVar11;
  undefined4 uVar12;
  char local_100 [256];
  
  uVar2 = FUN_08842ef4(1);
  uVar3 = FUN_08843910(uVar2);
  iVar4 = FUN_08843900(uVar2);
  if (uVar3 <= (uint)(iVar4 >> 3)) {
    iVar4 = FUN_088438ec(uVar2);
    iVar5 = FUN_08843900(uVar2);
    if (iVar4 <= iVar5 + -0x10) {
      puVar6 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
      pcVar7 = &DAT_00000100;
      pcVar9 = local_100;
      pcVar1 = pcVar9;
      while (pcVar1 != (char *)0x0) {
        *pcVar9 = '\0';
        pcVar9 = pcVar9 + 1;
        pcVar7 = pcVar7 + -1;
        pcVar1 = pcVar7;
      }
      Pac_Get_StringParam(param_2,local_100);
      iVar4 = Syscall::strlen(local_100);
      if (iVar4 != 0) {
        uVar2 = FUN_08883830(local_100);
        iVar4 = FUN_08843148(local_100,uVar2);
        if (iVar4 != 0) {
          PAC::PAC_setCmdId(param_2,0);
          return;
        }
        uVar2 = FUN_0884a440(1);
        uVar12 = *puVar6;
        pcVar11 = FUN_08882250;
        uVar10 = 0;
        uVar8 = FUN_08873e20(local_100);
        iVar4 = Syscall::strcmp(uVar8,s_lbnd_08a60b80);
        if (iVar4 == 0) {
          pcVar11 = FUN_08883100;
          uVar10 = 0x800;
        }
        Data::Load_File_From_Bnd(uVar2,local_100,pcVar11,uVar12,uVar10,0,0,0,0,0);
      }
      PAC::PAC_setCmdId(param_2,0);
    }
  }
  return;
}
```
