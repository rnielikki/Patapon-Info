# effectSetUserId

Gives a custom ID to the given effect.

## Code Information

- **Name**: `effectSetUserId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 04 00`
- **Assembly Address in Memory** : `0x8941224`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Handle of the effect, from [addEffect](./addeffect.md).
- `(uint)Var1` *(8 bytes)* : Expected 0~3.
- `(int)custom_id` *(8 bytes)* : Unique custom ID.

## Example

Here is one example in hex:

```25 19 04 00 / 04 00 00 00 / 40 00 00 00 / 02 00 00 00 / 03 00 00 00 / 04 00 00 00 / 41 00 00 00```

Which is interpreted as:

```c
effectSetUserId((int *)iVar64, (int)3, (int *)iVar65)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08941224(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  uint *puVar2;
  undefined4 *puVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
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
  if ((iVar4 != 0) && (*puVar2 < 4)) {
    *(undefined4 *)(*puVar2 * 4 + iVar4 + 0x2c0) = *puVar3;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

