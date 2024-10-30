# loadVersusDisplayCommon

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `loadVersusDisplayCommon`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 0d 01`
- **Assembly Address in Memory** : `0x8928b94`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 0d 01```

Which is interpreted as:

```c
loadVersusDisplayCommon()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08928b94(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,
                 undefined4 param_5,undefined4 param_6,undefined4 param_7,undefined4 param_8)

{
  undefined4 uVar1;
  int iVar2;
  int iVar3;
  undefined4 uVar4;
  undefined4 filepath;
  int iVar5;
  char acStack256 [64];
  char acStack192 [64];
  char acStack128 [64];
  char acStack64 [64];
  
  uVar1 = Save::Get_Save_BaseAddr(1);
  iVar2 = Save::Get_BaseAddr__0x78(uVar1,1);
  iVar2 = Is_Multi(*(undefined4 *)(iVar2 + 100));
  if (iVar2 == 0) {
    uVar1 = Save::Get_Save_BaseAddr(1);
    iVar2 = Save::Get_BaseAddr__0x78(uVar1,1);
    uVar1 = Param::Get_Data_Addr(*(undefined4 *)(iVar2 + 0xa4),1);
    uVar4 = 1;
    Param::Get_Line_Addr(uVar1,1,0);
    Data::Load_from_path
              (acStack64,s_Actor_VSRadar__s_bnd_08a5fd9c,s_radar_53_08a5fdb4,uVar4,param_5,param_6,
               param_7,param_8);
    uVar1 = FUN_08883830(acStack64);
    iVar2 = FUN_08843148(acStack64,uVar1);
    if (iVar2 == 0) {
      uVar1 = FUN_0884a440(1);
      uVar4 = 2;
      param_5 = 0;
      param_6 = 0;
      param_7 = 0;
      param_8 = 0;
      Data::Load_File_From_Bnd(uVar1,acStack64,FUN_08882250,2,0,0,0,0,0,0);
    }
    Data::Load_from_path
              (acStack128,s_Actor_VSRadar__s_bnd_08a5fd9c,s_radar_54_08a5fdc0,uVar4,param_5,param_6,
               param_7,param_8);
    uVar1 = FUN_08883830(acStack128);
    iVar2 = FUN_08843148(acStack128,uVar1);
    if (iVar2 == 0) {
      uVar1 = FUN_0884a440(1);
      param_5 = 0;
      param_6 = 0;
      param_7 = 0;
      param_8 = 0;
      Data::Load_File_From_Bnd(uVar1,acStack128,FUN_08882250,2,0,0,0,0,0,0);
    }
    iVar2 = Get_Some_Flag(1);
    iVar5 = 1;
    iVar2 = *(int *)(iVar2 + 0x44) + 0x3b70;
    do {
      iVar3 = iVar2 + 4 + *(int *)(iVar2 + 8) * 0x84;
      uVar1 = Param::Get_Charaparam_Id
                        (*(int *)(iVar2 + 8),*(int *)(iVar2 + 0x10) == 0,
                         *(undefined4 *)(iVar3 + 0x28));
      uVar1 = FUN_0895e9b8(uVar1,*(undefined4 *)(iVar3 + 0x24));
      uVar4 = Save::Get_Save_BaseAddr(1);
      iVar3 = Save::Get_BaseAddr__0x78(uVar4,1);
      uVar4 = Param::Get_Data_Addr(*(undefined4 *)(iVar3 + 0xa4),1);
      filepath = 1;
      iVar3 = Param::Get_Line_Addr(uVar4,1,uVar1);
      Data::Load_from_path
                (acStack192,s_Actor_VSRadar__s_bnd_08a5fd9c,iVar3 + 0xb0,filepath,param_5,param_6,
                 param_7,param_8);
      uVar1 = FUN_08883830(acStack192);
      iVar3 = FUN_08843148(acStack192,uVar1);
      if (iVar3 == 0) {
        uVar1 = FUN_0884a440(1);
        param_5 = 0;
        param_6 = 0;
        param_7 = 0;
        param_8 = 0;
        Data::Load_File_From_Bnd(uVar1,acStack192,FUN_08882250,2,0,0,0,0,0,0);
      }
      iVar5 = iVar5 + 1;
      iVar2 = iVar2 + 0x1620;
    } while (iVar5 < 4);
    iVar2 = *(int *)(param_1 + 0x10);
  }
  else {
    FUN_0884a440(1);
    uVar1 = Save::Get_Save_BaseAddr(1);
    iVar2 = Save::Get_BaseAddr__0x78(uVar1,1);
    if (*(char *)(*(int *)(iVar2 + 0x44) + 0x81c) == '\0') {
      Data::Load_from_path
                (acStack256,s_Actor_VSRadar__s_bnd_08a5fd9c,s_radar_54_08a5fdc0,param_4,param_5,
                 param_6,param_7,param_8);
      uVar1 = FUN_08883830(acStack256);
      iVar2 = FUN_08843148(acStack256,uVar1);
      if (iVar2 == 0) {
        uVar1 = FUN_0884a440(1);
        Data::Load_File_From_Bnd(uVar1,acStack256,FUN_08882250,2,0,0,0,0,0,0);
      }
    }
    iVar2 = *(int *)(param_1 + 0x10);
  }
  if (iVar2 != 0) {
    *(undefined *)(iVar2 + 0x50) = 1;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

