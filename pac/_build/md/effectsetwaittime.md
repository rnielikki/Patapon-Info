# effectSetWaitTime

Sets time to wait before the effect appears.

## Code Information

- **Name**: `effectSetWaitTime`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 05 00`
- **Assembly Address in Memory** : `0x894131c`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md).
- `(float)waiting_time` *(8 bytes)* : Time to wait before effect appears, as seconds.

## Example

Here is one example in hex:

```25 19 05 00 / 04 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
effectSetWaitTime((int *)iVar0, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894131c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3);
  }
  if (iVar3 != 0) {
    FUN_089c91ec(*puVar2,iVar3 + 0x288);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

