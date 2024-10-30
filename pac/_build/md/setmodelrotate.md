# setModelRotate

Rotates a model by its handle.

## Code Information

- **Name**: `setModelRotate`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 15 00`
- **Assembly Address in Memory** : `0x8942314`

## Parameters

- `(int *)handle` *(8 bytes)* : [Handle](./guide/how-to-get-a-handle.md) of the target.
- `(int)Var1` *(8 bytes)* : Please describe what this does, keep 1 to enable rotation.
- `(float)angle` *(8 bytes)* : Angle to rotate.

## Example

Here is one example in hex:

```25 19 15 00 / 04 00 00 00 / 11 00 00 00 / 02 00 00 00 / 01 00 00 00 / 10 00 00 00 / 00 00 b4 42```

Which is interpreted as:

```c
setModelRotate((int *)iVar17, (int)1, (float)90)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08942314(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  undefined4 *puVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else if (iVar4 == 0) {
    iVar4 = 0;
  }
  else {
    (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4);
  }
  if (iVar4 != 0) {
    *(byte *)(iVar4 + 0x324) = *(byte *)(iVar4 + 0x324) & 0xef | (*piVar2 != 0) << 4;
    *(undefined4 *)(iVar4 + 800) = *puVar3;
    FUN_088d4c60(0x3f800000,0x3f800000,*puVar3,iVar4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

