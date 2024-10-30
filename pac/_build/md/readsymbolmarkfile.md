# readSymbolMarkFile

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `readSymbolMarkFile`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 e0 00`
- **Assembly Address in Memory** : `0x892663c`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 e0 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
readSymbolMarkFile((int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892663c(undefined4 param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,
                 undefined4 param_5,undefined4 param_6,undefined4 param_7,undefined4 param_8)

{
  undefined *puVar1;
  char *pcVar2;
  int *piVar3;
  undefined *puVar4;
  char *pcVar5;
  undefined *puVar6;
  char *pcVar7;
  int discpath;
  undefined4 uVar8;
  char local_140 [256];
  undefined local_40 [64];
  
  uVar8 = 4;
  piVar3 = (int *)Pac_Get_Param(param_2,0,1);
  discpath = *piVar3;
  puVar4 = (undefined *)0x40;
  puVar6 = local_40;
  puVar1 = puVar6;
  while (puVar1 != (undefined *)0x0) {
    *puVar6 = 0;
    puVar6 = puVar6 + 1;
    puVar4 = puVar4 + -1;
    puVar1 = puVar4;
  }
  if (discpath == -1) {
    Data::Load_from_path
              (local_40,s_TeamFlagMissionDefault_08a5fd70,0xffffffff,uVar8,param_5,param_6,param_7,
               param_8);
  }
  else {
    Data::Load_from_path
              (local_40,s_TeamFlagMission_04d_08a5fd88,discpath,uVar8,param_5,param_6,param_7,
               param_8);
  }
  pcVar5 = &DAT_00000100;
  pcVar7 = local_140;
  pcVar2 = pcVar7;
  while (pcVar2 != (char *)0x0) {
    *pcVar7 = '\0';
    pcVar7 = pcVar7 + 1;
    pcVar5 = pcVar5 + -1;
    pcVar2 = pcVar5;
  }
  Data::Load_from_path
            (local_140,s_Actor_Reload_TeamFlagMission__s__08a5fd4c,local_40,uVar8,param_5,param_6,
             param_7,param_8);
  uVar8 = FUN_0884a440(1);
  Data::Load_File_From_Bnd(uVar8,local_140,FUN_08882250,3,0,0,0,0,0,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

