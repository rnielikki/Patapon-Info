# multi_waitActiveGenerator

Waits until generating is done in specific [generator](./create.md). Followed after [spawn](./spawn.md).

## Code Information

- **Name**: `multi_waitActiveGenerator`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 b5 00`
- **Assembly Address in Memory** : `0x891b1c8`

## Parameters

- `(int)generator_identifier` *(8 bytes)* : Identifier of the generator, **2nd parameter** of [create](./create.md).

## Example

Here is one example in hex:

```25 16 b5 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
multi_waitActiveGenerator((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891b1c8(int param_1,undefined4 param_2)

{
  undefined4 uVar1;
  int iVar2;
  int iVar3;
  undefined4 *puVar4;
  int iVar5;
  
  uVar1 = Save::Get_Save_BaseAddr(1);
  iVar2 = Save::Get_BaseAddr__0x78(uVar1,1);
  iVar5 = *(int *)(iVar2 + 100);
  iVar2 = *(int *)(param_1 + 0x10);
  if (iVar2 == 0) {
    iVar2 = 0;
  }
  uVar1 = *(undefined4 *)(iVar2 + 0x2c8);
  iVar2 = Get_Execution_Pause_Phase(param_2);
  iVar3 = Is_Multi(iVar5);
  if (iVar3 != 0) {
    iVar3 = *(int *)(param_1 + 0x10);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (*(int *)(iVar3 + 0x44) != 0xd) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
    if (*(char *)(iVar5 + 0xa6) != '\0') {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
  }
  if (iVar2 == 3) {
    iVar2 = FUN_089872b0(iVar5,2);
    if (iVar2 != 0) {
      Set_Execution_Pause_Phase(iVar5,2);
      PAC::PAC_setCmdId(param_2,0);
      *(undefined *)(iVar5 + 0xa4) = 0;
    }
  }
  else if (iVar2 == 2) {
    Pause_Execution(param_2);
    iVar2 = FUN_08987190(iVar5,2);
    if (iVar2 == 0) {
      PAC::PAC_setCmdId(param_2,0);
      *(undefined *)(iVar5 + 0xa4) = 0;
    }
  }
  else if (iVar2 == 1) {
    iVar2 = Get_Pool_BaseAddr(uVar1,*(undefined4 *)(param_1 + 0x34));
    if (iVar2 == 0) {
      PAC::PAC_setCmdId(param_2,0);
      *(undefined *)(iVar5 + 0xa4) = 0;
    }
    else if (*(char *)(iVar2 + 0x24) != '\0') {
      Pause_Execution(param_2,2);
    }
  }
  else if (iVar2 == 0) {
    puVar4 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
    iVar2 = Is_Multi(iVar5);
    if (iVar2 == 0) {
      PAC::PAC_setCmdId(param_2,0);
    }
    else {
      Pause_Execution(param_2,1);
      *(undefined4 *)(param_1 + 0x30) = *puVar4;
      iVar2 = func_0x08b5ac20(uVar1);
      *(int *)(param_1 + 0x34) = iVar2;
      if (iVar2 < 0) {
        PAC::PAC_setCmdId(param_2,0);
      }
      else {
        *(undefined *)(iVar5 + 0xa4) = 1;
      }
    }
  }
  return;
}
```

