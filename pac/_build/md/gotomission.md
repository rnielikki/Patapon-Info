# gotoMission

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `gotoMission`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 1e 00`
- **Assembly Address in Memory** : `0x894b3f8`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 0a 1e 00 / 08 00 00 00 / 4d 00 00 00 / 02 00 00 00 / 1e 00 00 00 / 02 00 00 00 / 63 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
gotoMission(((global)int *)giVar77, (int)30, (int)99, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894b3f8(int param_1,undefined4 param_2,undefined4 param_3,undefined4 param_4,
                 undefined4 param_5,undefined4 param_6,undefined4 param_7,undefined4 param_8)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  undefined auStack64 [64];
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    Data::Load_from_path
              (auStack64,s_Mission__02d__02d_pac_08a61664,*puVar3,*puVar4,param_5,param_6,param_7,
               param_8);
    iVar5 = Get_Some_Flag(1);
    iVar5 = *(int *)(iVar5 + 0x44);
    *(undefined4 *)(iVar5 + 0x550) = *puVar1;
    *(undefined4 *)(iVar5 + 0x534) = *puVar2;
    Syscall::strcpy(iVar5 + 0x55c,auStack64);
    FUN_0884f334(*(undefined4 *)(param_1 + 0x10),0,3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

