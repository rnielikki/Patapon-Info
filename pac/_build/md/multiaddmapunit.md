# multiAddMapUnit

Adds a unit to the troop directly.

## Code Information

- **Name**: `multiAddMapUnit`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 0f 00`
- **Assembly Address in Memory** : `0x8919e10`

## Parameters

- `(int *)troop_handle` *(8 bytes)* : The [troop handle](./addtroop.md).
- `(int *)handle_to_add` *(8 bytes)* : This can be obtained from e.g. [addChara](./addchara.md).

## Example

Here is one example in hex:

```25 16 0f 00 / 04 00 00 00 / 36 00 00 00 / 04 00 00 00 / 32 00 00 00```

Which is interpreted as:

```c
multiAddMapUnit((int *)iVar54, (int *)iVar50)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08919e10(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  Pac_Get_Param(param_2,1,1,4);
  Get_Some_Flag(1);
  Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

